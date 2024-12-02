'use client';

import { useLanguageStore } from '@/store/languageStore';
import { useEffect, useState } from 'react';
import { loadTranslation } from '@/utils/loadTranslation';

export default function Home() {
  const { language, setLanguage } = useLanguageStore();
  const [translations, setTranslations] = useState<Record<string, string>>({});

  const handleLanguageChange = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const fetchTranslations = async () => {
      const loadedTranslations = await loadTranslation(language);
      setTranslations(loadedTranslations);
    };

    fetchTranslations().then();
  }, [language]);
  return <>
    <div>
      <button className={"bg-blue-500 hover:bg-blue-700 disabled:bg-blue-200 text-white py-1 px-2" +
        " rounded"}
              type={"button"} onClick={() => handleLanguageChange("en")}
              disabled={language === 'en'}>English
      </button>
      <button type={"button"}
              className={"bg-red-500 hover:bg-red-700 disabled:bg-red-200 text-white py-1 px-2" +
                " rounded ml-2"}
              onClick={() => handleLanguageChange("pt")}
              disabled={language === 'pt'}>Portuguese
      </button>
    </div>
    <h1>Current Language: {language}</h1>
    <p>{translations["welcome_message"]}</p>
    <p>{translations["description"]}</p>
    <p>Hello World</p>
  </>;
}
