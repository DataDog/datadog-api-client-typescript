/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseResourceType } from "./CaseResourceType";
import { CaseUpdateStatusAttributes } from "./CaseUpdateStatusAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case update status
 */
export class CaseUpdateStatus {
  /**
   * Case update status attributes
   */
  "attributes": CaseUpdateStatusAttributes;
  /**
   * Case resource type
   */
  "type": CaseResourceType;

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
      type: "CaseUpdateStatusAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CaseUpdateStatus.attributeTypeMap;
  }

  public constructor() {}
}
