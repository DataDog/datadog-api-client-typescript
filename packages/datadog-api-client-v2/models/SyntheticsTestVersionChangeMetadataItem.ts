/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestVersionActionMetadata } from "./SyntheticsTestVersionActionMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing a single change within a version.
 */
export class SyntheticsTestVersionChangeMetadataItem {
  /**
   * The action that was performed (for example, `updated` or `created`).
   */
  "action"?: string;
  /**
   * Object containing metadata about a change action.
   */
  "actionMetadata"?: SyntheticsTestVersionActionMetadata;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    action: {
      baseName: "action",
      type: "string",
    },
    actionMetadata: {
      baseName: "action_metadata",
      type: "SyntheticsTestVersionActionMetadata",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestVersionChangeMetadataItem.attributeTypeMap;
  }

  public constructor() {}
}
