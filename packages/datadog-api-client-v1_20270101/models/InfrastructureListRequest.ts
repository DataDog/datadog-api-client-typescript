/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InfrastructureListQuery } from "./InfrastructureListQuery";
import { InfrastructureListRequestColumnsItems } from "./InfrastructureListRequestColumnsItems";
import { InfrastructureListRequestRequestType } from "./InfrastructureListRequestRequestType";
import { ListStreamSort } from "./ListStreamSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class InfrastructureListRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<InfrastructureListRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": InfrastructureListQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": InfrastructureListRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ListStreamSort;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<InfrastructureListRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "InfrastructureListQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "InfrastructureListRequestRequestType",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ListStreamSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return InfrastructureListRequest.attributeTypeMap;
  }

  public constructor() {}
}
