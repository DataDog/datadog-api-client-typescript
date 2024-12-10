/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppMeta } from "./AppMeta";
import { DeploymentIncluded } from "./DeploymentIncluded";
import { UpdateAppResponseData } from "./UpdateAppResponseData";
import { UpdateAppResponseRelationship } from "./UpdateAppResponseRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UpdateAppResponse` object.
 */
export class UpdateAppResponse {
  /**
   * The definition of `UpdateAppResponseData` object.
   */
  "data"?: UpdateAppResponseData;
  /**
   * The `UpdateAppResponse` `included`.
   */
  "included"?: Array<DeploymentIncluded>;
  /**
   * The definition of `AppMeta` object.
   */
  "meta"?: AppMeta;
  /**
   * The definition of `UpdateAppResponseRelationship` object.
   */
  "relationship"?: UpdateAppResponseRelationship;

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
      type: "UpdateAppResponseData",
    },
    included: {
      baseName: "included",
      type: "Array<DeploymentIncluded>",
    },
    meta: {
      baseName: "meta",
      type: "AppMeta",
    },
    relationship: {
      baseName: "relationship",
      type: "UpdateAppResponseRelationship",
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
    return UpdateAppResponse.attributeTypeMap;
  }

  public constructor() {}
}
