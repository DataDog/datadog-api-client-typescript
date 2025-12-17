/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityFindingsAttributes } from "./SecurityFindingsAttributes";
import { SecurityFindingsDataType } from "./SecurityFindingsDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single security finding.
 */
export class SecurityFindingsData {
  /**
   * The JSON object containing all attributes of the security finding.
   */
  "attributes"?: SecurityFindingsAttributes;
  /**
   * The unique ID of the security finding.
   */
  "id"?: string;
  /**
   * The type of the security finding resource.
   */
  "type"?: SecurityFindingsDataType;

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
      type: "SecurityFindingsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityFindingsDataType",
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
    return SecurityFindingsData.attributeTypeMap;
  }

  public constructor() {}
}
