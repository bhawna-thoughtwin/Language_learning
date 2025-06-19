
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../assets/firebaseConfig';
import { useLanguageStore } from '../store/useLanguageStore';

interface Lesson {
  id: string;
  name: string;
}

interface Unit {
  id: string;
  name: string;
  lessons: Lesson[];
}

interface Section {
  id: string;
  name: string;
  units: Unit[];
}

export const useCourseContent = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguageStore();
  console.log("Selected language:", language);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const sectionsRef = collection(db, `languages/${language}/sections`);
      const sectionsSnap = await getDocs(sectionsRef);

      const sectionData: Section[] = [];

      for (const sectionDoc of sectionsSnap.docs) {
        const sectionId = sectionDoc.id;
        const sectionName = sectionDoc.data().name;
        console.log("Sections snapshot:", sectionsSnap.docs.map(doc => ({ id: doc.id, data: doc.data() })));


        // Fetch units in section
        const unitsRef = collection(db, `languages/${language}/sections/${sectionId}/units`);
        const unitsSnap = await getDocs(unitsRef);

        const units: Unit[] = [];

        for (const unitDoc of unitsSnap.docs) {
          const unitId = unitDoc.id;
          const unitName = unitDoc.data().name;
          console.log(`Units for section ${sectionId}:`, unitsSnap.docs.map(doc => ({ id: doc.id, data: doc.data() })));



          // Fetch lessons in unit
          const lessonsRef = collection(db, `languages/${language}/sections/${sectionId}/units/${unitId}/lessons`);
          const lessonsSnap = await getDocs(lessonsRef);

          console.log(`Lessons for unit ${unitId}:`, lessonsSnap.docs.map(doc => ({ id: doc.id, data: doc.data() })));
          const lessons: Lesson[] = lessonsSnap.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name,
          }));

          units.push({
            id: unitId,
            name: unitName,
            lessons,
          });
        }

        sectionData.push({
          id: sectionId,
          name: sectionName,
          units,
        });
      }

      setSections(sectionData);
      setLoading(false);
    };

    fetchContent();
  }, [language]);

  return { sections, loading };
};
