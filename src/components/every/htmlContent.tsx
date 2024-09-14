import DOMPurify from "dompurify";

const HTMLContent = ({ content }: any) => {
  const sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ["p", "strong", "br", "ol", "li"], // Pastikan semua tag diizinkan
    ALLOWED_ATTR: [], // Jika ada atribut yang ingin diizinkan
  });

  return (
    <div
      className="list-outside list-decimal text-gray-500"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default HTMLContent;
