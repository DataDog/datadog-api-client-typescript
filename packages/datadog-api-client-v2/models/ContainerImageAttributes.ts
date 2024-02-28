/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageFlavor } from "./ContainerImageFlavor";
import { ContainerImageVulnerabilities } from "./ContainerImageVulnerabilities";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for a Container Image.
 */
export class ContainerImageAttributes {
  /**
   * Number of containers running the image.
   */
  "containerCount"?: number;
  /**
   * List of platform-specific images associated with the image record.
   * The list contains more than 1 entry for multi-architecture images.
   */
  "imageFlavors"?: Array<ContainerImageFlavor>;
  /**
   * List of image tags associated with the Container Image.
   */
  "imageTags"?: Array<string>;
  /**
   * List of build times associated with the Container Image.
   * The list contains more than 1 entry for multi-architecture images.
   */
  "imagesBuiltAt"?: Array<string>;
  /**
   * Name of the Container Image.
   */
  "name"?: string;
  /**
   * List of Operating System architectures supported by the Container Image.
   */
  "osArchitectures"?: Array<string>;
  /**
   * List of Operating System names supported by the Container Image.
   */
  "osNames"?: Array<string>;
  /**
   * List of Operating System versions supported by the Container Image.
   */
  "osVersions"?: Array<string>;
  /**
   * Time the image was pushed to the container registry.
   */
  "publishedAt"?: string;
  /**
   * Registry the Container Image was pushed to.
   */
  "registry"?: string;
  /**
   * Digest of the compressed image manifest.
   */
  "repoDigest"?: string;
  /**
   * Repository where the Container Image is stored in.
   */
  "repository"?: string;
  /**
   * Short version of the Container Image name.
   */
  "shortImage"?: string;
  /**
   * List of size for each platform-specific image associated with the image record.
   * The list contains more than 1 entry for multi-architecture images.
   */
  "sizes"?: Array<number>;
  /**
   * List of sources where the Container Image was collected from.
   */
  "sources"?: Array<string>;
  /**
   * List of tags associated with the Container Image.
   */
  "tags"?: Array<string>;
  /**
   * Vulnerability counts associated with the Container Image.
   */
  "vulnerabilityCount"?: ContainerImageVulnerabilities;

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
    containerCount: {
      baseName: "container_count",
      type: "number",
      format: "int64",
    },
    imageFlavors: {
      baseName: "image_flavors",
      type: "Array<ContainerImageFlavor>",
    },
    imageTags: {
      baseName: "image_tags",
      type: "Array<string>",
    },
    imagesBuiltAt: {
      baseName: "images_built_at",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    osArchitectures: {
      baseName: "os_architectures",
      type: "Array<string>",
    },
    osNames: {
      baseName: "os_names",
      type: "Array<string>",
    },
    osVersions: {
      baseName: "os_versions",
      type: "Array<string>",
    },
    publishedAt: {
      baseName: "published_at",
      type: "string",
    },
    registry: {
      baseName: "registry",
      type: "string",
    },
    repoDigest: {
      baseName: "repo_digest",
      type: "string",
    },
    repository: {
      baseName: "repository",
      type: "string",
    },
    shortImage: {
      baseName: "short_image",
      type: "string",
    },
    sizes: {
      baseName: "sizes",
      type: "Array<number>",
      format: "int64",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    vulnerabilityCount: {
      baseName: "vulnerability_count",
      type: "ContainerImageVulnerabilities",
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
    return ContainerImageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
