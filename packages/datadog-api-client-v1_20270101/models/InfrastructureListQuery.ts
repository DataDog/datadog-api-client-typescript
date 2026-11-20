/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerView } from "./ContainerView";
import { InfrastructureListQueryDataSource } from "./InfrastructureListQueryDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class InfrastructureListQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": InfrastructureListQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "resourceType": ContainerView;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dataSource: {
      baseName: "data_source",
      type: "InfrastructureListQueryDataSource",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "ContainerView",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return InfrastructureListQuery.attributeTypeMap;
  }

  public constructor() {}
}
