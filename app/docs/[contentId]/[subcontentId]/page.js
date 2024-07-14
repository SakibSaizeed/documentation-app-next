import ContentDisplay from "@/app/components/ContentDisplay";

const SubContentPage = ({ params: { subcontentId } }) => {
  return <ContentDisplay id={subcontentId} />;
};

export default SubContentPage;
