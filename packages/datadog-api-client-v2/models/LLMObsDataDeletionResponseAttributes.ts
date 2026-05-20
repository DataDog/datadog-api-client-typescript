/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a submitted LLM Observability data deletion request.
 */
export class LLMObsDataDeletionResponseAttributes {
  /**
   * Timestamp when the deletion request was created.
   */
  "createdAt": Date;
  /**
   * UUID of the user who created the deletion request.
   */
  "createdBy": string;
  /**
   * Start of the deletion time range in milliseconds since Unix epoch.
   */
  "fromTime": number;
  /**
   * ID of the organization that submitted the deletion request.
   */
  "orgId": number;
  /**
   * Product name for the deletion request.
   */
  "product": string;
  /**
   * The query string used to select data for deletion.
   */
  "query": string;
  /**
   * End of the deletion time range in milliseconds since Unix epoch.
   */
  "toTime": number;

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
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    fromTime: {
      baseName: "from_time",
      type: "number",
      required: true,
      format: "int64",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    product: {
      baseName: "product",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    toTime: {
      baseName: "to_time",
      type: "number",
      required: true,
      format: "int64",
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
    return LLMObsDataDeletionResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
