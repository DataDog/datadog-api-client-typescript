/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssuesSearchRequestDataAttributes } from "./IssuesSearchRequestDataAttributes";
import { IssuesSearchRequestDataType } from "./IssuesSearchRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Search issues request.
 */
export class IssuesSearchRequestData {
  /**
   * Object describing a search issue request.
   */
  "attributes": IssuesSearchRequestDataAttributes;
  /**
   * Type of the object.
   */
  "type": IssuesSearchRequestDataType;

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
      type: "IssuesSearchRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssuesSearchRequestDataType",
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
    return IssuesSearchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
