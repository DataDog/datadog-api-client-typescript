/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateEnvironmentAttributes } from "./CreateEnvironmentAttributes";
import { CreateEnvironmentDataType } from "./CreateEnvironmentDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating a new environment.
 */
export class CreateEnvironmentData {
  /**
   * Attributes for creating a new environment.
   */
  "attributes": CreateEnvironmentAttributes;
  /**
   * The resource type.
   */
  "type": CreateEnvironmentDataType;

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
      type: "CreateEnvironmentAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CreateEnvironmentDataType",
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
    return CreateEnvironmentData.attributeTypeMap;
  }

  public constructor() {}
}
