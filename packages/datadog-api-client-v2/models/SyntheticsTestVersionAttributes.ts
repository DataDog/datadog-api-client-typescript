/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestVersionAuthor } from "./SyntheticsTestVersionAuthor";
import { SyntheticsTestVersionChangeMetadataItem } from "./SyntheticsTestVersionChangeMetadataItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a specific Synthetic test version.
 */
export class SyntheticsTestVersionAttributes {
  /**
   * Object describing the author of a test version.
   */
  "author"?: SyntheticsTestVersionAuthor;
  /**
   * List of metadata describing individual changes in this version.
   * Only returned when the `include_change_metadata` query parameter is `true`.
   */
  "changeMetadata"?: Array<SyntheticsTestVersionChangeMetadataItem>;
  /**
   * The full test configuration at this version.
   */
  "payload"?: { [key: string]: any };
  /**
   * Timestamp of when this version was created.
   */
  "versionPayloadCreatedAt"?: Date;

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
    author: {
      baseName: "author",
      type: "SyntheticsTestVersionAuthor",
    },
    changeMetadata: {
      baseName: "change_metadata",
      type: "Array<SyntheticsTestVersionChangeMetadataItem>",
    },
    payload: {
      baseName: "payload",
      type: "{ [key: string]: any; }",
    },
    versionPayloadCreatedAt: {
      baseName: "version_payload_created_at",
      type: "Date",
      format: "date-time",
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
    return SyntheticsTestVersionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
