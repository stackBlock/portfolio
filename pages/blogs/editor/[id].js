import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import withAuth from "hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { toast } from "react-toastify";
import { useGetBlog, useUpdateBlogs } from "actions/blogs";
import { useRouter } from "next/router";

const BlogUpdateEditor = ({ user, userLoading }) => {
  const router = useRouter();
  const { data } = useGetBlog(router.query.id);
  const [updateBlog, { error, loading }] = useUpdateBlogs();

  const _updateBlog = async (data) => {
    await updateBlog(router.query.id, data);
    toast.success("Blog Updated");
  };

  if (error) {
    toast.error(error);
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage title="Blogs - Anthony Stachowitz" >
        {data && data.content && (
          <Editor
            initialContent={data.content}
            header="Update Your Blog..."
            onSave={_updateBlog}
            loading={loading}
          />
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogUpdateEditor)("admin");
