import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@mantine/core';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      placeholder="Select Language"
      data={[
        { value: 'en', label: 'English' },
        { value: 'hi', label: 'Hindi' },
      ]}
      value={i18n.language}
      onChange={(val) => changeLanguage(val!)}
    />
  );
};

export default LanguageSwitcher;
