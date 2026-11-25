import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ContextMenuLinkLabel } from "./ContextMenuLinkLabel";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ContextMenuLink {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isHidden"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "link"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "overrideLabel": ContextMenuLinkLabel;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    isHidden: {
      baseName: "is_hidden",
      type: "boolean",
    },
    link: {
      baseName: "link",
      type: "string",
    },
    overrideLabel: {
      baseName: "override_label",
      type: "ContextMenuLinkLabel",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContextMenuLink.attributeTypeMap;
  }

  public constructor() {}
}
