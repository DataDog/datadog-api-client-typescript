/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimestampType } from "./IncidentTimestampType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for patching a timestamp override. All fields are optional.
 */
export class IncidentTimestampOverridePatchDataAttributesRequest {
  /**
   * The type of timestamp to override.
   */
  "timestampType"?: IncidentTimestampType;
  /**
   * The overridden timestamp value.
   */
  "timestampValue"?: Date;

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
    timestampType: {
      baseName: "timestamp_type",
      type: "IncidentTimestampType",
    },
    timestampValue: {
      baseName: "timestamp_value",
      type: "Date",
      format: "date-time",
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
    return IncidentTimestampOverridePatchDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
