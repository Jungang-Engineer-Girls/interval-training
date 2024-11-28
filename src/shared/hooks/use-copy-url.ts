export const useCopyUrl = () => {
  const clipboardCopy = () => {
    const url = window.location.href;

    try {
      navigator.clipboard.writeText(url);

      return true;
    } catch {
      return false;
    }
  };

  const onCopyUrl = () => {
    const isCopied = clipboardCopy();

    if (isCopied) {
      alert("주소 복사 완료"); // 나중에 바꿀 예정(디자인 나오면)
    } else {
      alert("주소 복사 실패");
    }
  };

  return { onCopyUrl };
};
