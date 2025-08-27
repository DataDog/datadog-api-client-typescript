/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a data deletion request.
 */
export class CreateDataDeletionRequestBodyAttributes {
  /**
   * The total number of elements to be deleted that the UI shows to the user.
   */
  "displayedTotal": number;
  /**
   * Start of requested time window, milliseconds since Unix epoch.
   */
  "from": number;
  /**
   * List of indexes for the search. If not provided, the search is performed in all indexes.
   */
  "indexes"?: Array<string>;
  /**
   * Query for creating a data deletion request.
   */
  "query": { [key: string]: string };
  /**
   * End of requested time window, milliseconds since Unix epoch.
   */
  "to": number;

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
    displayedTotal: {
      baseName: "displayed_total",
      type: "number",
      required: true,
      format: "int64",
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "{ [key: string]: string; }",
      required: true,
    },
    to: {
      baseName: "to",
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
    return CreateDataDeletionRequestBodyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
