/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TemporaryGrantRequestDecisionAttributes } from "./TemporaryGrantRequestDecisionAttributes";
import { TemporaryGrantRequestType } from "./TemporaryGrantRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A decision on a pending request.
 */
export class TemporaryGrantRequestDecisionData {
  /**
   * Binary decision. Overrides, reason fields, and unknown attributes are rejected, including null values.
   */
  "attributes": TemporaryGrantRequestDecisionAttributes;
  /**
   * Request UUID. Must match request_id in the path. Missing or mismatched IDs return 400 Bad Request.
   */
  "id": string;
  /**
   * The temporary grant request resource type.
   */
  "type": TemporaryGrantRequestType;

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
      type: "TemporaryGrantRequestDecisionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "TemporaryGrantRequestType",
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
    return TemporaryGrantRequestDecisionData.attributeTypeMap;
  }

  public constructor() {}
}
