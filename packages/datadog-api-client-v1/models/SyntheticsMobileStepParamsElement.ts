/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileStepParamsElementContextType } from "./SyntheticsMobileStepParamsElementContextType";
import { SyntheticsMobileStepParamsElementRelativePosition } from "./SyntheticsMobileStepParamsElementRelativePosition";
import { SyntheticsMobileStepParamsElementUserLocator } from "./SyntheticsMobileStepParamsElementUserLocator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about the element used for a step.
 */
export class SyntheticsMobileStepParamsElement {
  /**
   * Context of the element.
   */
  "context"?: string;
  /**
   * Type of the context that the element is in.
   */
  "contextType"?: SyntheticsMobileStepParamsElementContextType;
  /**
   * Description of the element.
   */
  "elementDescription"?: string;
  /**
   * Multi-locator to find the element.
   */
  "multiLocator"?: any;
  /**
   * Position of the action relative to the element.
   */
  "relativePosition"?: SyntheticsMobileStepParamsElementRelativePosition;
  /**
   * Text content of the element.
   */
  "textContent"?: string;
  /**
   * User locator to find the element.
   */
  "userLocator"?: SyntheticsMobileStepParamsElementUserLocator;
  /**
   * Name of the view of the element.
   */
  "viewName"?: string;

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
    context: {
      baseName: "context",
      type: "string",
    },
    contextType: {
      baseName: "contextType",
      type: "SyntheticsMobileStepParamsElementContextType",
    },
    elementDescription: {
      baseName: "elementDescription",
      type: "string",
    },
    multiLocator: {
      baseName: "multiLocator",
      type: "any",
    },
    relativePosition: {
      baseName: "relativePosition",
      type: "SyntheticsMobileStepParamsElementRelativePosition",
    },
    textContent: {
      baseName: "textContent",
      type: "string",
    },
    userLocator: {
      baseName: "userLocator",
      type: "SyntheticsMobileStepParamsElementUserLocator",
    },
    viewName: {
      baseName: "viewName",
      type: "string",
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
    return SyntheticsMobileStepParamsElement.attributeTypeMap;
  }

  public constructor() {}
}
