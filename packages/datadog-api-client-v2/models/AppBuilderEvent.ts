/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppBuilderEventName } from "./AppBuilderEventName";
import { AppBuilderEventType } from "./AppBuilderEventType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An event on a UI component that triggers a response or action in an app.
 */
export class AppBuilderEvent {
  /**
   * The triggering action for the event.
   */
  "name"?: AppBuilderEventName;
  /**
   * The response to the event.
   */
  "type"?: AppBuilderEventType;

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
    name: {
      baseName: "name",
      type: "AppBuilderEventName",
    },
    type: {
      baseName: "type",
      type: "AppBuilderEventType",
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
    return AppBuilderEvent.attributeTypeMap;
  }

  public constructor() {}
}
