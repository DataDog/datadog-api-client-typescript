/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseViewResourceType } from "./CaseViewResourceType";
import { CaseViewUpdateAttributes } from "./CaseViewUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a case view.
 */
export class CaseViewUpdate {
  /**
   * Attributes that can be updated on a case view. All fields are optional; only provided fields are changed.
   */
  "attributes"?: CaseViewUpdateAttributes;
  /**
   * JSON:API resource type for case views.
   */
  "type": CaseViewResourceType;

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
      type: "CaseViewUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "CaseViewResourceType",
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
    return CaseViewUpdate.attributeTypeMap;
  }

  public constructor() {}
}
