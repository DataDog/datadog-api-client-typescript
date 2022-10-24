/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionDataAttributes } from "./ServiceDefinitionDataAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Service definition data.
 */
export class ServiceDefinitionData {
  /**
   * Service definition attributes.
   */
  "attributes"?: ServiceDefinitionDataAttributes;
  /**
   * Service definition type.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "ServiceDefinitionDataAttributes",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionData.attributeTypeMap;
  }

  public constructor() {}
}
