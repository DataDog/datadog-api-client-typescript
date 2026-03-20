/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateEnvironmentAttributes } from "./UpdateEnvironmentAttributes";
import { UpdateEnvironmentDataType } from "./UpdateEnvironmentDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating an environment.
 */
export class UpdateEnvironmentData {
  /**
   * Attributes for updating an environment.
   */
  "attributes": UpdateEnvironmentAttributes;
  /**
   * The resource type.
   */
  "type": UpdateEnvironmentDataType;

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
      type: "UpdateEnvironmentAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UpdateEnvironmentDataType",
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
    return UpdateEnvironmentData.attributeTypeMap;
  }

  public constructor() {}
}
