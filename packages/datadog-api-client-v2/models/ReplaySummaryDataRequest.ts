/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ReplaySummaryRequestType } from "./ReplaySummaryRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a RUM replay summary request.
 */
export class ReplaySummaryDataRequest {
  /**
   * RUM replay summary request resource type.
   */
  "type": ReplaySummaryRequestType;

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
    type: {
      baseName: "type",
      type: "ReplaySummaryRequestType",
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
    return ReplaySummaryDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
