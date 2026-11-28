/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotBackendTableRequest20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddsqlQuery: {
      baseName: "ddsql_query",
      type: "string",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotBackendTableRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
