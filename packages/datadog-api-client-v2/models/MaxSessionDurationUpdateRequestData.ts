/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaxSessionDurationUpdateAttributes } from "./MaxSessionDurationUpdateAttributes";
import { MaxSessionDurationUpdateRequestDataType } from "./MaxSessionDurationUpdateRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data wrapper for maximum session duration update.
 */
export class MaxSessionDurationUpdateRequestData {
  /**
   * Attributes for updating maximum session duration.
   */
  "attributes": MaxSessionDurationUpdateAttributes;
  /**
   * Type of the resource.
   */
  "type": MaxSessionDurationUpdateRequestDataType;

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
      type: "MaxSessionDurationUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MaxSessionDurationUpdateRequestDataType",
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
    return MaxSessionDurationUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
