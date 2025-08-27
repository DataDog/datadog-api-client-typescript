/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Deletion attribute for data deletion response.
 */
export class DataDeletionResponseItemAttributes {
  /**
   * Creation time of the deletion request.
   */
  "createdAt": string;
  /**
   * User who created the deletion request.
   */
  "createdBy": string;
  /**
   * Total number of elements to be deleted according to the UI.
   */
  "displayedTotal": number;
  /**
   * Start of requested time window, milliseconds since Unix epoch.
   */
  "fromTime": number;
  /**
   * List of indexes for the search. If not provided, the search is performed in all indexes.
   */
  "indexes"?: Array<string>;
  /**
   * Whether the deletion request is fully created or not. It can take several minutes to fully create a deletion request depending on the target query and timeframe.
   */
  "isCreated": boolean;
  /**
   * Organization ID.
   */
  "orgId": number;
  /**
   * Product name.
   */
  "product": string;
  /**
   * Query for creating a data deletion request.
   */
  "query": string;
  /**
   * Starting time of the process to delete the requested data.
   */
  "startingAt": string;
  /**
   * Status of the deletion request.
   */
  "status": string;
  /**
   * End of requested time window, milliseconds since Unix epoch.
   */
  "toTime": number;
  /**
   * Total number of elements to be deleted. Only the data accessible to the current user that matches the query and timeframe provided will be deleted.
   */
  "totalUnrestricted": number;
  /**
   * Update time of the deletion request.
   */
  "updatedAt": string;

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
      type: "string",
      required: true,
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    displayedTotal: {
      baseName: "displayed_total",
      type: "number",
      required: true,
      format: "int64",
    },
    fromTime: {
      baseName: "from_time",
      type: "number",
      required: true,
      format: "int64",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    isCreated: {
      baseName: "is_created",
      type: "boolean",
      required: true,
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
    startingAt: {
      baseName: "starting_at",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    toTime: {
      baseName: "to_time",
      type: "number",
      required: true,
      format: "int64",
    },
    totalUnrestricted: {
      baseName: "total_unrestricted",
      type: "number",
      required: true,
      format: "int64",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
      required: true,
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
    return DataDeletionResponseItemAttributes.attributeTypeMap;
  }

  public constructor() {}
}
