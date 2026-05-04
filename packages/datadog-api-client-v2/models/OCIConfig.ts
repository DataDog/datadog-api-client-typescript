/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OCIConfigAttributes } from "./OCIConfigAttributes";
import { OCIConfigType } from "./OCIConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * OCI config.
 */
export class OCIConfig {
  /**
   * Attributes for an OCI config.
   */
  "attributes": OCIConfigAttributes;
  /**
   * The ID of the OCI config.
   */
  "id": string;
  /**
   * Type of OCI config.
   */
  "type": OCIConfigType;

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
      type: "OCIConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OCIConfigType",
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
    return OCIConfig.attributeTypeMap;
  }

  public constructor() {}
}
