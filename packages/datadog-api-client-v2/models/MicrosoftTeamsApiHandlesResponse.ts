/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MicrosoftTeamsApiHandleInfoResponseData } from "./MicrosoftTeamsApiHandleInfoResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of handles.
 */
export class MicrosoftTeamsApiHandlesResponse {
  /**
   * An array of handles.
   */
  "data": Array<MicrosoftTeamsApiHandleInfoResponseData>;

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
    data: {
      baseName: "data",
      type: "Array<MicrosoftTeamsApiHandleInfoResponseData>",
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
    return MicrosoftTeamsApiHandlesResponse.attributeTypeMap;
  }

  public constructor() {}
}
