import { Heading1BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { H2 } from '../CommonElements';
import { NotionRichTextItems } from './NotionRichText';

export default function NotionBlockHeading1({
  children,
}: {
  children: Heading1BlockObjectResponse;
}) {
  return (
    <H2 id={children.id}>
      <NotionRichTextItems blockId={children.id}>
        {children.heading_1.rich_text}
      </NotionRichTextItems>
    </H2>
  );
}
