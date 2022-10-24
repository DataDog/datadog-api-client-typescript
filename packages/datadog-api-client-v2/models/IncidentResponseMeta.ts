/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The metadata object containing pagination metadata.
 */
export class IncidentResponseMeta {
  /**
   * Pagination properties.
   */
  "pagination"?: IncidentResponseMetaPagination;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pagination: {
      baseName: "pagination",
      type: "IncidentResponseMetaPagination",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
