/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMEventProcessingState } from "./RUMEventProcessingState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM event processing scale configuration.
 */
export class RUMEventProcessingScale {
  /**
   * Timestamp in milliseconds when this scale was last modified.
   */
  "lastModifiedAt"?: number;
  /**
   * Configures which RUM events are processed and stored for the application.
   */
  "state"?: RUMEventProcessingState;

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
    lastModifiedAt: {
      baseName: "last_modified_at",
      type: "number",
      format: "int64",
    },
    state: {
      baseName: "state",
      type: "RUMEventProcessingState",
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
    return RUMEventProcessingScale.attributeTypeMap;
  }

  public constructor() {}
}
