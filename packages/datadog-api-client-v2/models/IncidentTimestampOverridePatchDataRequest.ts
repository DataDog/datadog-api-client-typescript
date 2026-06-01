/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTimestampOverridePatchDataAttributesRequest } from "./IncidentTimestampOverridePatchDataAttributesRequest";
import { IncidentTimestampOverrideType } from "./IncidentTimestampOverrideType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Timestamp override data in a patch request.
 */
export class IncidentTimestampOverridePatchDataRequest {
  /**
   * Attributes for patching a timestamp override. All fields are optional.
   */
  "attributes"?: IncidentTimestampOverridePatchDataAttributesRequest;
  /**
   * The timestamp override identifier.
   */
  "id": string;
  /**
   * Incident timestamp override resource type.
   */
  "type": IncidentTimestampOverrideType;

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
      type: "IncidentTimestampOverridePatchDataAttributesRequest",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "IncidentTimestampOverrideType",
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
    return IncidentTimestampOverridePatchDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
