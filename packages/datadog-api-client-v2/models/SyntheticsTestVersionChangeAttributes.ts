/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestVersionChangeMetadataItem } from "./SyntheticsTestVersionChangeMetadataItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a version change record.
 */
export class SyntheticsTestVersionChangeAttributes {
  /**
   * UUID of the user who created this version.
   */
  "authorUuid"?: string;
  /**
   * List of metadata describing individual changes in this version.
   */
  "changeMetadata"?: Array<SyntheticsTestVersionChangeMetadataItem>;
  /**
   * The sequential version number.
   */
  "versionNumber"?: number;
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
    authorUuid: {
      baseName: "author_uuid",
      type: "string",
    },
    changeMetadata: {
      baseName: "change_metadata",
      type: "Array<SyntheticsTestVersionChangeMetadataItem>",
    },
    versionNumber: {
      baseName: "version_number",
      type: "number",
      format: "int64",
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
    return SyntheticsTestVersionChangeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
