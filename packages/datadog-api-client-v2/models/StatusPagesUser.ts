/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPagesUserAttributes } from "./StatusPagesUserAttributes";
import { StatusPagesUserType } from "./StatusPagesUserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The included Datadog user resource.
 */
export class StatusPagesUser {
  /**
   * Attributes of the Datadog user.
   */
  "attributes"?: StatusPagesUserAttributes;
  /**
   * The ID of the Datadog user.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type": StatusPagesUserType;

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
      type: "StatusPagesUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "StatusPagesUserType",
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
    return StatusPagesUser.attributeTypeMap;
  }

  public constructor() {}
}
