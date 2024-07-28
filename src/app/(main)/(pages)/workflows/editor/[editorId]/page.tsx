import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <></>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default Page;
