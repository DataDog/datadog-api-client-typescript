/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContextMenuLinkLabel } from "./ContextMenuLinkLabel";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
