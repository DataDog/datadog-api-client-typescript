/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Finding } from "./Finding";
import { ListFindingsMeta } from "./ListFindingsMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The expected response schema when listing findings.
 */
export class ListFindingsResponse {
  /**
   * Array of findings.
   */
  "data": Array<Finding>;
  /**
   * Metadata for pagination.
   */
  "meta": ListFindingsMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<Finding>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListFindingsMeta",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListFindingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
