/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueUpdateStateRequestDataAttributes } from "./IssueUpdateStateRequestDataAttributes";
import { IssueUpdateStateRequestDataType } from "./IssueUpdateStateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update issue state request.
 */
export class IssueUpdateStateRequestData {
  /**
   * Object describing an issue state update request.
   */
  "attributes": IssueUpdateStateRequestDataAttributes;
  /**
   * Issue identifier.
   */
  "id": string;
  /**
   * Type of the object.
   */
  "type": IssueUpdateStateRequestDataType;

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
      type: "IssueUpdateStateRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IssueUpdateStateRequestDataType",
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
    return IssueUpdateStateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
