/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFilterVersionAttributes } from "./SecurityFilterVersionAttributes";
import { SecurityFilterVersionType } from "./SecurityFilterVersionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A snapshot of all security filters at a specific configuration version.
 */
export class SecurityFilterVersion {
  /**
   * The attributes describing a single security filter configuration version.
   */
  "attributes": SecurityFilterVersionAttributes;
  /**
   * The identifier of the configuration version.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be `security_filters_configuration`.
   */
  "type": SecurityFilterVersionType;

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
    attributes: {
      baseName: "attributes",
      type: "SecurityFilterVersionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityFilterVersionType",
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
    return SecurityFilterVersion.attributeTypeMap;
  }

  public constructor() {}
}
