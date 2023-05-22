export const validateEmail = (value: string): boolean => {
  const emailRegex =
    /^[a-z0-9.+_-]{1,61}@[a-z0-9]{2,}.[a-z]{2,}(.[a-z]{1,2})?$/;
  return emailRegex.test(value);
};

export const formatName = (name: string) => {
  const sanitized = name.replace(
    /[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g,
    '',
  );
  return sanitized;
};
