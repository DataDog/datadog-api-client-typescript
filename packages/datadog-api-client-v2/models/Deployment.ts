/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppDeploymentType } from "./AppDeploymentType";
import { DeploymentAttributes } from "./DeploymentAttributes";
import { DeploymentMetadata } from "./DeploymentMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The version of the app that was published.
 */
export class Deployment {
  /**
   * The attributes object containing the version ID of the published app.
   */
  "attributes"?: DeploymentAttributes;
  /**
   * The deployment ID.
   */
  "id"?: string;
  /**
   * Metadata object containing the publication creation information.
   */
  "meta"?: DeploymentMetadata;
  /**
   * The deployment type.
   */
  "type"?: AppDeploymentType;

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
      type: "DeploymentAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    meta: {
      baseName: "meta",
      type: "DeploymentMetadata",
    },
    type: {
      baseName: "type",
      type: "AppDeploymentType",
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
    return Deployment.attributeTypeMap;
  }

  public constructor() {}
}
