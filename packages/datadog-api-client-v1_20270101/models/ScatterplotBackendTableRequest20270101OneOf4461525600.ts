/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AdvancedQueryDataset } from "./AdvancedQueryDataset";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451373184 } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451373184";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451373984 } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451373984";
import { ScatterplotProjection } from "./ScatterplotProjection";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotBackendTableRequest20270101OneOf4461525600 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasetToQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "datasets": Array<AdvancedQueryDataset>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "projection"?: ScatterplotProjection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451373184;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451373984;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    datasetToQuery: {
      baseName: "dataset_to_query",
      type: "string",
      required: true,
    },
    datasets: {
      baseName: "datasets",
      type: "Array<AdvancedQueryDataset>",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    projection: {
      baseName: "projection",
      type: "ScatterplotProjection",
    },
    requestType: {
      baseName: "request_type",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451373184",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451373984",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotBackendTableRequest20270101OneOf4461525600.attributeTypeMap;
  }

  public constructor() {}
}
