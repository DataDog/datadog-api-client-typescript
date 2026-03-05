/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an LLM Observability dataset.
 */
export class LLMObsDatasetDataAttributesResponse {
  /**
   * Timestamp when the dataset was created.
   */
  "createdAt": Date;
  /**
   * Current version number of the dataset.
   */
  "currentVersion": number;
  /**
   * Description of the dataset.
   */
  "description": string | null;
  /**
   * Arbitrary metadata associated with the dataset.
   */
  "metadata": { [key: string]: any } | null;
  /**
   * Name of the dataset.
   */
  "name": string;
  /**
   * Timestamp when the dataset was last updated.
   */
  "updatedAt": Date;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    currentVersion: {
      baseName: "current_version",
      type: "number",
      required: true,
      format: "int64",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
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
    return LLMObsDatasetDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
