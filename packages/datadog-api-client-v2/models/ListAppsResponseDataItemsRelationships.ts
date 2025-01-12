/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DeploymentRelationship } from "./DeploymentRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The app's publication information.
 */
export class ListAppsResponseDataItemsRelationships {
  /**
   * Information pointing to the app's publication status.
   */
  "deployment"?: DeploymentRelationship;

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
    deployment: {
      baseName: "deployment",
      type: "DeploymentRelationship",
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
    return ListAppsResponseDataItemsRelationships.attributeTypeMap;
  }

  public constructor() {}
}
