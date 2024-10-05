import { Heading2BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { H3 } from '../CommonElements';
import { NotionRichTextItems } from './NotionRichText';

export function NotionBlockHeading2({
  children,
}: {
  children: Heading2BlockObjectResponse;
}) {
  return (
    <H3 id={children.id}>
      <NotionRichTextItems blockId={children.id}>
        {children.heading_2.rich_text}
      </NotionRichTextItems>
    </H3>
  );
}
