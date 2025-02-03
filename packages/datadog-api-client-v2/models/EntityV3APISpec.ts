/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3APISpecInterface } from "./EntityV3APISpecInterface";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of Entity V3 API Spec object.
 */
export class EntityV3APISpec {
  /**
   * Services which implemented the API.
   */
  "implementedBy"?: Array<string>;
  /**
   * The API definition.
   */
  "_interface"?: EntityV3APISpecInterface;
  /**
   * The lifecycle state of the component.
   */
  "lifecycle"?: string;
  /**
   * The importance of the component.
   */
  "tier"?: string;
  /**
   * The type of API.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    implementedBy: {
      baseName: "implementedBy",
      type: "Array<string>",
    },
    _interface: {
      baseName: "interface",
      type: "EntityV3APISpecInterface",
    },
    lifecycle: {
      baseName: "lifecycle",
      type: "string",
    },
    tier: {
      baseName: "tier",
      type: "string",
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
    return EntityV3APISpec.attributeTypeMap;
  }

  public constructor() {}
}
