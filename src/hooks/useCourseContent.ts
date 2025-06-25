import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../assets/firebaseConfig';
import { useLanguageStore } from '../store/useLanguageStore';

export const useCourseContent = () => {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState<any[]>([]); // holds the list of sections

  const { language, setSection, setUnits } = useLanguageStore();

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);

      try {
        const sectionsRef = collection(db, `languages/${language}/sections`);
        const sectionsSnap = await getDocs(sectionsRef);

        if (sectionsSnap.empty) {
          setSections([]); // return empty list
          setLoading(false);
          return;
        }

        const sectionList = sectionsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSections(sectionList);

        const firstSection = sectionsSnap.docs[0];
        const sectionId = firstSection.id;
        const sectionName = firstSection.data().name;

        setSection({ id: sectionId, name: sectionName });

        const unitsRef = collection(db, `languages/${language}/sections/${sectionId}/units`);
        const unitsSnap = await getDocs(unitsRef);

        const units = unitsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUnits(units);
      } catch (error) {
        console.error("Error fetching course content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [language, setSection, setUnits]);

  return { loading, sections };
};
