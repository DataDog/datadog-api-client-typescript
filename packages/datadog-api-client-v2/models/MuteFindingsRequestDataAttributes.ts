/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteFindingsMuteAttributes } from "./MuteFindingsMuteAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the mute request.
 */
export class MuteFindingsRequestDataAttributes {
  /**
   * Mute properties to apply to the findings.
   */
  "mute": MuteFindingsMuteAttributes;

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
    mute: {
      baseName: "mute",
      type: "MuteFindingsMuteAttributes",
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
    return MuteFindingsRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
