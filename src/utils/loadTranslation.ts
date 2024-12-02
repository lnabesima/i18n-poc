export const loadTranslation = async (language: string) => {
  try {
    const res = await fetch(`/locales/${language}.json`);
    if (res.ok){
      return res.json();
    } else {
      console.error(`Error loading translation for ${language}`);
      return {}
    }
  }catch (error){
    console.error(`Error loading translation for ${language}`);
    return {}
  }
}
